import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async signUp(signUpDto: SignUpDto) {
        const { username, email, password } = signUpDto;

        const existingUser = await this.userModel.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            throw new ConflictException('Username or email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new this.userModel({
            username,
            email,
            password: hashedPassword,
        });
        user.save();

        const payload = { id: user._id, role: user.role };

        const token = this.jwtService.sign(payload);

        return { token };
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;

        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid email or password');
        }

        const payload = { id: user._id, role: user.role };

        const token = this.jwtService.sign(payload);

        return { token };
    }
}

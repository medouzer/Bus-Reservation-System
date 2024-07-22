user click login button : /auth/intra
success : {
    user redirected to home page;
    Home:
        request user information form backend
            /user/current
        request available Bus time
            /bus/time/current
        request available stations
            /stations/all
        User Make Reservation :
            /user-reservation/create
}
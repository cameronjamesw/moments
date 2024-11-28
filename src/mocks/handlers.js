import { rest } from "msw"

const baseURL = 'https://cams-api-63fe6b3dbe56.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
                "pk": 1,
                "username": "cam0800",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 1,
                "profile_image": "https://res.cloudinary.com/djm3rhxrd/image/upload/v1/media/images/IMG_1874_q3hvdq"
            })
        )
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];
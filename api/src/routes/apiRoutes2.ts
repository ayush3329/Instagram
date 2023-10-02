const {User} = require('../Schema/UserDetail');
const express = require('express');
const router = express.Router();
const {Login, Signup, SearchUser, profileChange, isLoggedin, getUserInfo, followUser, getMyDetails, 
    unfollowUser, post_upload, admin, promotion_status, Submit_Details, getPosts, previous_Searched_user, RecentChatsUser,ordinaryChat} = require('../Controller/apiController')
router.post("/login", Login);
router.post("/signup", Signup);
router.post("/search/:username", SearchUser)
router.post("/changeProfile", profileChange)
router.post("/isLoggedin", isLoggedin)
router.post("/getUserInfo", getUserInfo)
router.post("/followUser", followUser);
router.post("/getMyDetails", getMyDetails);
router.post("/unfollowUser", unfollowUser);
router.post("/post_upload", post_upload);
router.get("/admin", admin);
router.post("/promotion_status", promotion_status);
router.post("/Submit_Details", Submit_Details);
router.post("/getPosts", getPosts);
router.post("/previous_Searched_user", previous_Searched_user);
router.post("/RecentChatsUser", RecentChatsUser);
router.post("/ordinaryChat", ordinaryChat);



export default router
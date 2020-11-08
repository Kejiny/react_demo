import home from "../pages/home";
import login from "../pages/login";
import register from "../pages/register";
import welcome from "../pages/welcome";
import about from "../pages/about";

const Router =[
    {
        path:"/",
        component:welcome,
        exact:true,
    },
    {
        path:"/login",
        component:login,
        exact:true,
    },
    {
        path:"/register",
        component:register,
        exact:true,
    },
    {
        path:"/home",
        component:home,
        exact:true,
    },
    {
        path:"/about",
        component:about,
        exact:true,
    },


];
export default Router
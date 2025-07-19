import {Outlet} from "react-router-dom";
import ShopingHeader from "../admin-view/header";

function ShoppingLayout(){
    return (
        <div className="flex flex=col bg-white-hidden ">
            <ShopingHeader />
            <main className="flex flex-col w-full">
               <Outlet />
            </main>
        </div>
    );
}

export default ShoppingLayout;
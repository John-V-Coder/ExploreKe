import { Outlet } from 'react-router-dom';


function AuthLayout(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-4"> 
                    ExploreKe Authentication
                    </h1>
                </div>
            </div>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;

import React from "react";

import FormAddProduct from "~/components/FormAddProduct";

const AdminPage = () => {
    return (
        <div className="flex flex-row">
            <FormAddProduct />

            <div>
                Information of All Shoes
            </div>
        </div>
    );
}
 
export default AdminPage;
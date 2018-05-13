

class loginController{
    constructor($state){
        "ngInject"
        this.findRestaurant = () =>{
            console.log("called")
            $state.go('view')
        }
    }

}
export default loginController;
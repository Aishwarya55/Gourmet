

class restaurantlistController {
    constructor($rootScope,restaurantlistService){
        "ngInject"
        restaurantlistService.getRestaurantCategories().then((success)=>{
            console.log(success)
        })
    

        if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition((position) => {
               console.log(position)
               this.lattitude = position.coords.latitude
               this.longitude = position.coords.longitude
               restaurantlistService.getNearbyRestaurants(this.lattitude, this.longitude).then((success)=>{
                console.log(success, "nearby")
                this.nearby = success.data.nearby_restaurants
            })
           });
        }


  

    }
}

export default restaurantlistController
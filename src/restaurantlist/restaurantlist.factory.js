

let restaurantlistService = ($http) =>{
    "ngInject";
    let BASE_URL = "https://developers.zomato.com/api/v2.1/"
    let API_KEY = "1199228101b8c335863d01d8d88556f8"
    return{
        getRestaurantCategories:() =>{
            let config = {
                headers:{
                    'user-key': API_KEY
                }
            }
            return $http.get(BASE_URL+"categories", config)
        },

        getNearbyRestaurants:(lat, lon) =>{
            let config = {
                headers:{
                    'user-key': API_KEY
                }
            }
            return $http.get(BASE_URL+"/geocode?lat="+lat+"&lon="+lon,config)
        }
    }
}

export default restaurantlistService

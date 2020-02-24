import User from './User';

class Exception{
    handel(error){
        this.isExipred(error)
    }

    isExipred(error){
        if(error == 'Taken is Expired'){
            User.logout()
        }
    }
}

export default Exception = new Exception()
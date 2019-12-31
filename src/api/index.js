import service from './request'
// import Qs from 'qs'


// ========================
export default {
    Login(){
        return service.get('/api/equity/banners')
    }
}




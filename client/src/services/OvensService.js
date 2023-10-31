import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('ovens')
    },
    show (ovenId) {
        return Api().get('oven/' + ovenId)
    },
    post (oven) {
        return Api().post('oven/', oven)
    },
    put (oven) {
        return Api().put('oven/' + oven.id, oven)
    },
    delete (oven) {
        return Api().delete('oven/' + oven.id, oven)
    },
}
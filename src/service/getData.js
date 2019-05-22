import axios from 'axios'
import APIURL from '@/config/env'

/**
 * 确认登录
 * @param openid
 * @returns {AxiosPromise}
 */
export const LoginPcConfirm = (param) => (
    axios({
        method:"post",
        url:`${APIURL}/hall/LoginPcConfirm`,
        data:param
    })
)


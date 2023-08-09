import axios, {AxiosError} from 'axios'
import {API_URL} from '__CONSTANTS__/index'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const post = async (
  path: string,
  data: Object,
  authToken: string | null = null,
  isPrompt: boolean = true,
  prompt: string = 'Action Success'
) => {
  try {
    const RESPONSE = await axios.post(API_URL + path, data, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    })

    isPrompt &&
      MySwal.fire({
        text: 'Created Successfully',
        icon: 'success',
        buttonsStyling: false,
        confirmButtonText: 'Ok!',
        heightAuto: false,
        customClass: {
          confirmButton: 'btn btn-danger',
        },
      }).then(() => {})
    return RESPONSE.data
  } catch (error: any) {
    if (error.response?.data.errors) {
      MySwal.fire({
        icon: 'error',
        html:
          '<div class="text-left align-left">' +
          error.response.data.errors.map(
            (e: any) => `<b class="text-capitalize"> ${e.field} </b>: ${e.message}<br>`
          ) +
          '</div>',
        buttonsStyling: false,
        confirmButtonText: 'Ok!',
        heightAuto: false,
        customClass: {
          confirmButton: 'btn btn-danger',
        },
      }).then(() => {})
    }

    if (error.response.data.error) {
      MySwal.fire({
        text: error.response.data.error,
        icon: 'error',
        buttonsStyling: false,
        confirmButtonText: 'Ok!',
        heightAuto: false,
        customClass: {
          confirmButton: 'btn btn-danger',
        },
      }).then(() => {})
    }
    if (error.response.status === 401) {
      MySwal.fire({
        text: 'Unauthorised',
        icon: 'error',
        buttonsStyling: false,
        confirmButtonText: 'Ok!',
        heightAuto: false,
        customClass: {
          confirmButton: 'btn btn-danger',
        },
      }).then(() => {})
    }
  }
}

export default post

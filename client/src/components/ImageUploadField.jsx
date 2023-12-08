import axios from "axios"

export default function ImageUploadField ({ value, formData, setFormData}) {

  async function handleImageUpload(e) {
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    const { data: {secure_url} } = await axios.post(endpoint, data)

    setFormData({ ...formData, image: secure_url })
  }

  return (
    <>
    </>

  )
}
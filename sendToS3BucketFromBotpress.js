workflow.noCodeSuccess = false

const leadData = {
  name: workflow.fileFromUser
}

const uploadData = async () => {
  try {
    const date = new Date()
    const fileName = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}_${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}.json`

    const response = await axios({
      method: 'put',
      url: `https://yourUrl.com/${fileName}`,
      data: JSON.stringify(leadData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    workflow.noCodeSuccess = true
  } catch (error) {
    console.error(error)
  }
}

uploadData()

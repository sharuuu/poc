import * as React from 'react'
import { useState } from 'react'

import QRCode from 'qrcode.react'

import { Form, Label, TextField, Submit } from '@redwoodjs/forms'

import styles from './QRCodePage.css?inline'

interface QRCodeGeneratorProps {
  data: string
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ data }) => {
  console.log('URL: ' + data)
  return (
    <div>
      <h2>Scan the QR Code below to Make Payment</h2>
      <QRCode value={data} />
    </div>
  )
}

function QRCodePage() {
  const [showComponent, setShowComponent] = useState(false)
  const [url, setUrl] = useState('')
  // const [url, setUrl] = useState({
  //   employeeId: '',
  //   reportId: '',
  // })

  const handleSubmit = (data) => {
    // e.preventDefault()
    // When the form is submitted, set showComponent to true
    const qrData = `upi://pay?pa=xxxxxx&pn=Sharath%20S&am=${data.amount}&cu=INR&tn=${data.employeeId}-${data.reportId}`


    setShowComponent(true)
    setUrl(qrData)
    console.log('Done Submit')
  }

  return (
    <>
      <Form className="rw-form-wrapper" onSubmit={handleSubmit}>
        <Label name="employeeId" className="rw-label">
          Employee ID:
        </Label>
        <TextField
          name="employeeId"
          defaultValue="00114571"
          className="rw-input"
        />
        <Label name="employeeName" className="rw-label">
          Name:
        </Label>
        <TextField
          name="employeeName"
          defaultValue="Test User"
          className="rw-input"
        />
        <Label name="reportId" className="rw-label">
          Report ID:
        </Label>
        <TextField name="reportId" defaultValue="230001" className="rw-input" />
        <Label name="amount" className="rw-label">
          Amount:
        </Label>
        <TextField name="amount" defaultValue="500" className="rw-input" />
        <div className="rw-button-group">
          {/* <Submit className="rw-button rw-button-blue {}" >Submit</Submit> */}
          <Submit className={styles.button}>Submit</Submit>
        </div>
      </Form>
      <div className="App">
        {showComponent && <QRCodeGenerator data={url} />}
      </div>
    </>
  )
}

export default QRCodePage

import { useState, useEffect } from 'react'
import axios from 'axios'
import BarChart from './barChart'

const AdminDashboard = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [chargeCustomers, setChargeCustomers] = useState(null)

  const fetchData = async () => {
    try {
      const id = window.localStorage.getItem('Id')
      const response = await axios.get(`${import.meta.env.VITE_API}/${id}`)
      // console.log('API Response:', response.data.data)
      setData(response.data.data)

      const chargeCustomersValue = response.data.data.charge_customers
      setChargeCustomers(chargeCustomersValue)
    } catch (error) {
      console.error('API Error:', error)
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  //save button logic
  const saveSettings = () => {
    // console.log('Settings saved!')
  }

  return (
    <>
      {error ? (
        <div>{error}</div>
      ) : (
        <div className="dashboard">
          <h1>
            {data?.name}, {data?.location} on Dhun Jam
          </h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              columnGap: 36,
              rowGap: 16,
            }}
          >
            <div>
              Do you want to charge your customers for requesting songs?
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>
                <label htmlFor="affirmative">Yes</label>
                <input
                  type="radio"
                  id="affirmative"
                  value="yes"
                  onChange={() => setChargeCustomers(true)}
                  checked={chargeCustomers}
                />
              </div>
              <div style={{ marginLeft: '20px' }}>
                <label htmlFor="negative">No</label>
                <input
                  type="radio"
                  id="negative"
                  value="no"
                  onChange={() => setChargeCustomers(false)}
                  checked={!chargeCustomers}
                />
              </div>
            </div>

            <div>Custom Song Request Amount-</div>
            <input type="number" id="customAmount" min="99" />

            <div>Regular Song Request Amounts, from high to low-</div>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50px',
                  border: '1px solid white',
                  borderRadius: '10px',
                }}
              >
                {data?.amount?.category_7}
              </div>
              <div
                style={{
                  width: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50px',
                  border: '1px solid white',
                  borderRadius: '10px',
                  marginLeft: '16px',
                }}
              >
                {data?.amount?.category_8}
              </div>
              <div
                style={{
                  width: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50px',
                  border: '1px solid white',
                  borderRadius: '10px',
                  marginLeft: '16px',
                }}
              >
                {data?.amount?.category_9}
              </div>
              <div
                style={{
                  width: '70px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '50px',
                  border: '1px solid white',
                  borderRadius: '10px',
                  marginLeft: '16px',
                }}
              >
                {data?.amount?.category_10}
              </div>
            </div>
          </div>
          <div style={{ margin: '20px' }}>
            <BarChart data={data?.amount} />
          </div>
          <button
            type="button"
            id="saveButton"
            onClick={saveSettings()}
            disabled
          >
            Save
          </button>
        </div>
      )}
    </>
  )
}

export default AdminDashboard

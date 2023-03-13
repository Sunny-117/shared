import axios from 'axios'
axios.get('/api/search?keywords=MELANCHOLY').then(res=>{
  console.log(res.data.result)
})
export default function App() {

  return (
    <div>App</div>
  )
}

  

import pic1 from '../Images/photo-1.jpeg'

export default function Photo() {

  return (
  <div className="avatar">
    <div className="photo mask mask-hexagon">
      <img src={pic1} />
    </div>
  </div>
  )
}
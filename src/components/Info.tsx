 // @ts-ignore
 import { HashLink as Link } from 'react-router-hash-link';

export default function Info() {

  return (
    <div>
      <h1 className="text-4xl">Hi,</h1>
      <h1 className="text-4xl">I'm Josh</h1>
      <h1 className="text-4xl">Junior Software Developer</h1>
      <div className="flex-end mt-20">
        <Link to={'#contact'} className="btn bg-orange-100 text-l">Contact</Link>
      </div>
    </div>
  )
}
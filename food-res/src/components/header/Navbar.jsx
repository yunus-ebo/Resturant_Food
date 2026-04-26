import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className='close'>
        <i className="bx bx-x-circle close-icon" />
      </div>
      <ul className='navbar'>
        <li><Link className='nav-link' to={"/"}> الصفحة الرئيسية </Link></li>
        <li><Link className='nav-link' > أكل شرقي </Link></li>
        <li><Link className='nav-link' > أكل غربي </Link></li>
        <li><Link className='nav-link' > مقبلات </Link></li>
        <li><Link className='nav-link' > مشروبات </Link></li>
      </ul>
    </nav>
  )
}
export default Navbar
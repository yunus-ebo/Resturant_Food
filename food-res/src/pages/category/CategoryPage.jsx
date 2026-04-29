import {useParams} from 'react-router-dom'
import {navLinks} from '../../data/navLinks'
const CategoryPage = () => {
  
    const {category} = useParams();
    const current = navLinks.find(curr => curr.slug === category); // don't do redux for this
  return (
    <div>
        <h1>
            {current.label}
        </h1>
    </div>
  )
}
export default CategoryPage;
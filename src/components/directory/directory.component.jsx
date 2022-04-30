import CategoryItem from "../category-item/category-item.component";
import './directory.scss';

const Directory = ({categories}) => {
    return(
    <div className = "category-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
    </div>
    )
}

export default Directory;
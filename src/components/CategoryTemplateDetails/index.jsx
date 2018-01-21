import React from 'react'; import PropTypes from 'prop-types';
import Post from '../Post';

class CategoryTemplateDetails extends React.Component {
  render() {
    const items = [];
    const category = this.props.data.contentfulCategory;
    if (category.post) {
      category.post.forEach((post) => {
        items.push(
          <Post data={post} key={post.id} />
        );
      });
    }

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">
              {category.name}
            </h1>
            <div className="page__body">
              {items}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoryTemplateDetails.propTypes = {
  data: PropTypes.shape({
    contentfulCategory: PropTypes.shape({
      name: PropTypes.string.isRequired,
      post: PropTypes.object.isRequired
    })
  })
};

export default CategoryTemplateDetails;

import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Grid from 'material-ui/Grid';

import Details from './details';
import { CategoryList, RootCategoryList } from './categoryList';
import { FilterCard } from '../../../components/cards';
import { screenSizes } from '../../../misc';

const filterInputs = [
  {
    inputType: 'text',
    name: 'name',
    label: 'Name',
    placeholder: 'Name'
  }
];

// TODO: Plug-in filters
const CategoryDetails = (props) => {
  const categoryId = props.match.params.id;

  return (
    <div>
      <MediaQuery minWidth={screenSizes.md}>
        <Grid container spacing={16}>
          <Grid item md={9} lg={9}>
            {categoryId ? (
              <div>
                <Details categoryId={categoryId} />
                <CategoryList categoryId={categoryId} />
              </div>
            ) : (
              <RootCategoryList />
            )}
          </Grid>
          <Grid item md={3} lg={3}>
            <FilterCard inputs={filterInputs} />
          </Grid>
        </Grid>
      </MediaQuery>
      <MediaQuery maxWidth={screenSizes.md}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12}>
            <FilterCard inputs={filterInputs} />
          </Grid>
          <Grid item xs={12} sm={12}>
            {categoryId ? (
              <div>
                <Details categoryId={categoryId} />
                <CategoryList categoryId={categoryId} />
              </div>
            ) : (
              <RootCategoryList />
            )}
          </Grid>
        </Grid>
      </MediaQuery>
    </div>
  );
};
CategoryDetails.propTypes = {
  pk: PropTypes.int
};

export default CategoryDetails;

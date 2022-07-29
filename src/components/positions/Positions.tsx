import React from 'react';

import { useGetApplicantIndividualCompanyPositionsQuery } from '../../utils/__generated__/graphql';
import { CustomSelect } from '../customSelect/CustomSelect';

type PositionsPropsType = {
  name: string;
  onChangeCallback: (name: string, value: string | string[] | null) => void;
  error: string | undefined;
};

export const Positions = (props: PositionsPropsType): React.ReactElement => {
  const { name, onChangeCallback, error } = props;
  const { data, loading } = useGetApplicantIndividualCompanyPositionsQuery();

  const options = data?.applicantIndividualCompanyPositions?.data
    ? data.applicantIndividualCompanyPositions.data
    : [];

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <CustomSelect
      isMultiple={false}
      options={options}
      name={name}
      onChangeCallback={onChangeCallback}
      error={error}
    />
  );
};

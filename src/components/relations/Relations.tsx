import React from 'react';

import { useGetApplicantIndividualCompanyRelationsQuery } from '../../utils/__generated__/graphql';
import { CustomSelect } from '../customSelect/CustomSelect';

type RelationsPropsType = {
  name: string;
  error: string | undefined;
  onChangeCallback: (name: string, value: string | string[] | null) => void;
};

export const Relations = (props: RelationsPropsType): React.ReactElement => {
  const { name, onChangeCallback, error } = props;
  const { data, loading } = useGetApplicantIndividualCompanyRelationsQuery();

  const options = data?.applicantIndividualCompanyRelations?.data
    ? data.applicantIndividualCompanyRelations.data
    : [];

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <CustomSelect
      options={options}
      isMultiple
      name={name}
      error={error}
      onChangeCallback={onChangeCallback}
    />
  );
};

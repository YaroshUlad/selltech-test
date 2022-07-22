import React from 'react';
import {useGetApplicantIndividualCompanyPositionsQuery} from "../utils/__generated__/graphql";


export const Positions = () => {
    const {data, loading, error} = useGetApplicantIndividualCompanyPositionsQuery()

    if (loading || !data) {
        return <div>Loading</div>;
    }

    if (error) {
        return <div>Error</div>;
    }
    return (
        <div>
            {data.applicantIndividualCompanyPositions?.data.map(el => {
                return (
                    <div key={el.id}>{el.name}</div>
                )
            })}
        </div>
    );
};

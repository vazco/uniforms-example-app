import React from 'react';
import {AutoForm} from 'uniforms-semantic';

const SimpleForm = ({schema, onSubmit, model = {}}) => (
    <AutoForm
        schema={schema}
        onSubmit={onSubmit}
        model={model}
    />
);

export default SimpleForm;

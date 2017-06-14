import React from 'react';
import {AutoForm, TextField, LongTextField, RadioField, SubmitField, ErrorsField} from 'uniforms-semantic';
import {Grid} from 'semantic-ui-react';

const CustomForm = ({schema, onSubmit, model = {}}) => (
    <AutoForm schema={schema} onSubmit={onSubmit} model={model}>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <TextField name="title" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <LongTextField name="content" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={12}>
                    <TextField name="authorName" />
                </Grid.Column>
                <Grid.Column width={4}>
                    <RadioField name="status" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <SubmitField value="Ship it!" className="blue fluid" />
                    <ErrorsField />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </AutoForm>
);

export default CustomForm;

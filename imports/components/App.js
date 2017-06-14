import React from 'react';
import {Grid, Segment, Menu, Modal, Header} from 'semantic-ui-react';

import {BlogPostSchema} from '/imports/api/schema';

import SimpleForm from './SimpleForm';
import CustomForm from './CustomForm';

export default class App extends React.Component {

    state = {
        selectedTab: 'simpleForm',
        modalData: null,
    };

    openTab = selectedTab => this.setState({selectedTab});

    onSubmit = data => {
        // You can do anything with this data,
        // send it to the server using Meteor.call, invoke GraphQL mutation or just display in a modal :)
        this.setState({modalData: data})
    };

    closeModal = () => this.setState({modalData: null});

    render () {
        const {selectedTab, modalData} = this.state;
        return (
            <Grid verticalAlign="middle" centered className="app-container">
                <Grid.Column width={8}>
                    <Header as="h2">Simple uniforms demo</Header>
                    <Segment>
                        <Menu pointing secondary>
                            {['simpleForm', 'customizedForm', 'FormPopulatedWithData'].map(tab => (
                                    <Menu.Item
                                        key={tab}
                                        name={tab}
                                        active={tab === selectedTab}
                                        onClick={() => this.openTab(tab)}
                                    />
                                )
                            )}
                        </Menu>

                        {/* Not very elegant but simple and working tabs system */}
                        {selectedTab === 'simpleForm' && (
                            <SimpleForm
                                schema={BlogPostSchema}
                                onSubmit={this.onSubmit}
                            />
                        )}
                        {selectedTab === 'customizedForm' && (
                            <CustomForm
                                schema={BlogPostSchema}
                                onSubmit={this.onSubmit}
                            />
                        )}
                        {selectedTab === 'FormPopulatedWithData' && (
                            <CustomForm
                                schema={BlogPostSchema}
                                onSubmit={this.onSubmit}
                                model={{
                                    title: 'Example blog post',
                                    content: 'This could be a blog post edit form, populated with current data from DB',
                                    author: 'John Doe',
                                    status: 'published'
                                }}
                            />
                        )}
                    </Segment>

                    <Modal
                        open={!!modalData}
                        onClose={this.closeModal}
                        header="Data submitted!"
                        content={(
                            <Modal.Content>
                                <pre>{JSON.stringify(modalData, null, 4)}</pre>
                            </Modal.Content>
                        )}
                        actions={[
                            {key: 'ok', content: 'Ok', color: 'blue', onClick: this.closeModal}
                        ]}
                    />
                </Grid.Column>
            </Grid>
        )
    }
}

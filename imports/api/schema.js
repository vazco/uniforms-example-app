import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const BlogPostSchema = new SimpleSchema({
    title: {
        type: String,
    },
    authorName: {
        type: String,
        optional: true,
    },
    content: {
        type: String,
        min: 10
    },
    status: {
        type: String,
        allowedValues: ['draft', 'published'],
        defaultValue: 'draft'
    },
});

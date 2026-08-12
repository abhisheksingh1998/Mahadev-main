import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 120},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'breadcrumb',
      title: 'Breadcrumb Label',
      type: 'string',
      initialValue: 'Cricket Guides',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      initialValue: 'Mahadev Book',
    }),
    defineField({
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Blog Listing',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'sections',
      title: 'Article Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'articleSection',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading', validation: (R: any) => R.required()},
            {
              name: 'paragraphs',
              type: 'array',
              title: 'Paragraphs',
              of: [{type: 'text'}],
            },
          ],
          preview: {
            select: {title: 'heading'},
          },
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body (optional rich text)',
      description: 'Optional. If set, used instead of structured sections.',
      type: 'blockContent',
    }),
    defineField({
      name: 'blockquote',
      title: 'Pull Quote',
      type: 'object',
      fields: [
        {name: 'text', type: 'text', title: 'Quote Text', rows: 3},
        {name: 'cite', type: 'string', title: 'Citation'},
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
    }),
  ],
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare({title, media, date}) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
      }
    },
  },
})

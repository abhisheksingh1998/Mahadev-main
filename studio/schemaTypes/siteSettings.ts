import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'whatsappUrl',
      title: 'WhatsApp Link',
      type: 'url',
      description: 'Used for Login, Register, CTAs, and floating button',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Header Logo',
      type: 'image',
      options: {hotspot: true},
      fields: [{name: 'alt', type: 'string', title: 'Alt text'}],
    }),
    defineField({
      name: 'headerNav',
      title: 'Header Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {name: 'label', type: 'string', title: 'Label', validation: (R: any) => R.required()},
            {name: 'href', type: 'string', title: 'URL / Hash', validation: (R: any) => R.required()},
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        {name: 'description', type: 'text', title: 'Footer Description', rows: 3},
        {name: 'email', type: 'string', title: 'Support Email'},
        {name: 'copyright', type: 'string', title: 'Copyright Text'},
        {
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', type: 'string', title: 'Label'},
                {name: 'href', type: 'string', title: 'URL / Hash'},
              ],
            },
          ],
        },
        {
          name: 'supportLinks',
          title: 'Support Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'label', type: 'string', title: 'Label'},
                {name: 'href', type: 'string', title: 'URL / Hash'},
              ],
            },
          ],
        },
        {
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'platform',
                  type: 'string',
                  title: 'Platform',
                  options: {
                    list: [
                      {title: 'Facebook', value: 'facebook'},
                      {title: 'Instagram', value: 'instagram'},
                      {title: 'Telegram', value: 'telegram'},
                      {title: 'Twitter', value: 'twitter'},
                    ],
                  },
                },
                {name: 'url', type: 'url', title: 'URL'},
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'whatsappTooltip',
      title: 'Floating WhatsApp Tooltip',
      type: 'string',
      initialValue: 'Get Instant ID On WhatsApp',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Site Settings'}),
  },
})

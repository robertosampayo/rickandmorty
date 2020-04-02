import slugify from 'slugify'

export default function slug(name) {
    return slugify(name, {lower: true}).replace(/[^a-z0-9 -]/g, "")
}
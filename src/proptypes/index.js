import PropTypes from 'prop-types'

export const jobType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  province: PropTypes.oneOf([
    'San José',
    'Alajuela',
    'Cartago',
    'Heredia',
    'Guanacaste',
    'Puntarenas',
    'Limon']).isRequired,
  fact: PropTypes.string.isRequired,
  info: PropTypes.string,
  maplink: PropTypes.string,
  imagelink: PropTypes.string,
  imagecontentlinksection1: PropTypes.string,
  imagecontentlinksection2: PropTypes.string,
})

export const jobTypeDefault = {
  id: '',
  title: '',
  province: 'San José',
  fact: '',
  info: '',
  maplink: '',
  imagelink: '',
  imagecontentlinksection1: '',
  imagecontentlinksection2: '',
}
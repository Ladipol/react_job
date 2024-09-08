import PropTypes from 'prop-types'

const Cards = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

Cards.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
};

export default Cards
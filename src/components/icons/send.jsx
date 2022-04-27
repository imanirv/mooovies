
function SendIcon(props) {
    return (
      <svg
        width={20}
        height={20}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0 0l26 13L0 26V0zm0 10.4v5.2L13 13 0 10.4z"
          fill="#fff"
          fillOpacity={0.87}
        />
      </svg>
    )
  }
  
export default SendIcon
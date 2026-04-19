function PopUpWindow({ title, onClose, children, position, isClosing, startDragging, xIcon, size }) {
  return (
    <div
      className="popupPositioner"
      style={{
        transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
      }}
    >
      <div className={`popupWindow popupWindow--${size} ${isClosing ? 'popupClosing' : 'popupOpening'}`}>
        <div className="popupHeader" onMouseDown={startDragging}>
          <span>{title}</span>
          <button className="closeButton" onClick={onClose}>
            <img src={xIcon} alt="close" className="closeIcon" />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

export default PopUpWindow
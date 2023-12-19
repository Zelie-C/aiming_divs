const FullscreenButton = (props: {onClick: () => void}) => {



    return (
        <>
            <div className="fullscreen-btn" onClick={() => props.onClick()}></div>
        </>
    )
}

export default FullscreenButton
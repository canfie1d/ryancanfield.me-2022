const Video = (props) => {
  return (
    <div
      className={props.className}
      style={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56.25%',
        overflow: 'hidden',
        marginBottom: 0,
      }}
    >
      <video width='100%' poster={props.poster} controls={true}>
        <source src={props.src} type='video/mp4' />
      </video>
    </div>
  );
};

Video.defaultProps = {
  title: '',
  src: '',
};

export default Video;

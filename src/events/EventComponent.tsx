const EventComponent: React.FunctionComponent = () => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStartHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input onChange={onChangeHandler} />
      <div draggable onDragStart={onDragStartHandler}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;

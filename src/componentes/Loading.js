import { useLoading, Grid } from '@agney/react-loading';

function Loading() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Grid width="50"/>,
  });

  return (
   
    <section {...containerProps}>
      <div className="loader">{indicatorEl} </div>
    </section>
  );
}
export default Loading;
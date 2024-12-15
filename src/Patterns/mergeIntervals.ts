function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length < 1) return intervals;

  // Step 1 : Sort intervals by their starting points
  intervals.sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const lastInterval = merged[merged.length - 1];
    const currentInterval = intervals[i];

    //Step 2 : Check if the intervals overlp
    if (currentInterval[0] <= lastInterval[1]) {
      //Merge intervals by updating the end thime of the last interval
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
    } else {
      // No overlap, add the current interval to the result
      merged.push(currentInterval);
    }
  }
  return merged;
}

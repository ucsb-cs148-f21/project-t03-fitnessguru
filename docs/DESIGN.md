# FitnessGuru Design

## Overview
[FitnessGuru Design Diagram.pdf](https://github.com/ucsb-cs148-f21/project-t03-fitnessguru/files/7529966/FitnessGuru.Design.Diagram.pdf)

## User Flow
[User Flow.pdf](https://github.com/ucsb-cs148-f21/project-t03-fitnessguru/files/7572380/User.Flow.pdf)


## Specifics
- Pages: Home, Profile, MyExercises, MyWorkouts, MySplits, MyWeights, Progress

  - Home
    - Prompts user with a welcome message
  - Profile
    - Connected to MongoDB database
    - Allows user to log profile picture, name, weight, height, and notes
  - MyExercises
    - Connected to MongoDB database
    - Lists all exercises that user has added to their exercises list
    - User can create a new exercise (CreateExercise component) which allows them to select from wgerAPI's exercises or create a custom one
    - User can edit and delete exercises
  - MyWorkouts
    - Connected to MongoDB database
    - Lists all workouts that user has added to their workouts list
    - User can create a new workout (CreateWorkout component) which allows them to add different exercises to a new workout
      - Any new exercises from the new workout will be added to the MyExercises page
    - User can edit and delete workouts
  - MySplits
    - Connected to MongoDB database
    - Lists all Splits that user has added to their splits list
    - User can create a new split, and add workouts to the split.
      - Any new workouts created withing a split will be added to the MyWorkouts page
    - User can edit and delete splits
  - MyWeights
    - User can log their weights that they lifted for specific exercises from the MyExercises page
    - This information is posted to the MongoDB database
  - Progress
    - User can select an exercise and the number of reps to see a chart of their progress for that given exercise for that amount of reps.

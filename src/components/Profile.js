import React, { useState, useEffect } from 'react'
import getUser from "../utils/get-user";

export default function Exercise(){
    const [profile, setProfile] = useState()

    const user = getUser()

    useEffect(() => {
        fetch(`/user/${user.id}`)
        .then(res => res.json())
        .then(user => setProfile(user))
    }, [user.id])

        return (
            <div>
                {
                    <div>
                        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#updateProfile">
                            Update Profile
                        </button>
                    </div>
                    (profile != null)
                    ?
                    <div class="modal fade" id="updateProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Update Profile</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form action="/user" method="POST" class="mb-4">
                                    <div class="modal-body"> 
                                        <br/>
                                        <div class="form-group">
                                            <label for="sets">Sets</label>
                                            <input type="number" name="sets" defaultValue={exercise.sets} class="form-control"/>
                                        </div>
                                        <br/>
                                        <div class="form-group">
                                            <label for="repetitions">Repetitions</label>
                                            <input type="number" name="repetitions" defaultValue={exercise.repetitions} class="form-control"/>
                                        </div>
                                        <br/>
                                        <div class="form-group">
                                            <label for="weight">Weight</label>
                                            <input type="number" name="weight" defaultValue={exercise.weight} class="form-control"/>
                                        </div>
                                        <br/>
                                        <div class="form-group">
                                            <label for="notes">Notes</label>
                                            <input type="text" name="notes" defaultValue={exercise.notes} class="form-control"/>
                                        </div>
                                        <br/>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <input type="submit" value="Update Exercise" class="btn btn-primary btn-block"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                }
                                
                                
                                
            </div>
        )
}

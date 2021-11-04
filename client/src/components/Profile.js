import React, { useState, useEffect } from "react";
import getUser from "../utils/get-user";
import "./contai.css";
export default function Exercise() {
    const [profile, setProfile] = useState({});

    const user = getUser();

    useEffect(() => {
        fetch(`/user/${user.id}`)
            .then((res) => res.json())
            .then((user) => setProfile(user));
    }, [user.id]);

    return (
        <div>
            <div>
                <button
                    type="button"
                    class="btn btn-primary btn-block"
                    data-toggle="modal"
                    data-target="#updateProfile"
                    className="bt2"
                >
                    Update Profile
                </button>
            </div>
            {console.log(profile)}
            {Object.keys(profile).length === 0 ? (
                <div>
                    <div
                        class="modal fade"
                        id="updateProfile"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Update Profile
                                    </h5>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form action="/user" method="POST" class="mb-4">
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <input
                                                type="hidden"
                                                name="googleId"
                                                value={user.id}
                                                class="form-control"
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <label for="dateOfBirth">
                                                Date of Birth
                                            </label>
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                class="form-control"
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <label for="heightFeet">
                                                Height (Feet)
                                            </label>
                                            <input
                                                type="number"
                                                name="heightFeet"
                                                class="form-control"
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <label for="heightInches">
                                                Height (Inches)
                                            </label>
                                            <input
                                                type="number"
                                                name="heightInches"
                                                class="form-control"
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <label for="weight">
                                                Weight (Pounds)
                                            </label>
                                            <input
                                                type="number"
                                                name="weight"
                                                class="form-control"
                                            />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <label for="notes">Notes</label>
                                            <input
                                                type="text"
                                                name="notes"
                                                class="form-control"
                                            />
                                        </div>
                                        <br />
                                    </div>
                                    <div class="modal-footer">
                                        <button
                                            type="button"
                                            class="btn btn-secondary"
                                            data-dismiss="modal"
                                        >
                                            Close
                                        </button>
                                        <input
                                            type="submit"
                                            value="Update Profile"
                                            class="btn btn-primary btn-block"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {profile.map((profile) => (
                        <div>
                            <div
                                class="modal fade"
                                id="updateProfile"
                                tabIndex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5
                                                class="modal-title"
                                                id="exampleModalLabel"
                                            >
                                                Update Profile
                                            </h5>
                                            <button
                                                type="button"
                                                class="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">
                                                    &times;
                                                </span>
                                            </button>
                                        </div>
                                        <form
                                            action={"/user/put/" + user.id}
                                            method="POST"
                                            class="mb-4"
                                        >
                                            <div class="modal-body">
                                                <br />
                                                <div class="form-group">
                                                    <label for="dateOfBirth">
                                                        Date of Birth
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="dateOfBirth"
                                                        defaultValue={
                                                            profile.dateOfBirth
                                                        }
                                                        class="form-control"
                                                    />
                                                </div>
                                                <br />
                                                <div class="form-group">
                                                    <label for="heightFeet">
                                                        Height (Feet)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="heightFeet"
                                                        defaultValue={
                                                            profile.heightFeet
                                                        }
                                                        class="form-control"
                                                    />
                                                </div>
                                                <br />
                                                <div class="form-group">
                                                    <label for="heightInches">
                                                        Height (Inches)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="heightInches"
                                                        defaultValue={
                                                            profile.heightInches
                                                        }
                                                        class="form-control"
                                                    />
                                                </div>
                                                <br />
                                                <div class="form-group">
                                                    <label for="weight">
                                                        Weight (Pounds)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="weight"
                                                        defaultValue={
                                                            profile.weight
                                                        }
                                                        class="form-control"
                                                    />
                                                </div>
                                                <br />
                                                <div class="form-group">
                                                    <label for="notes">
                                                        Notes
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="notes"
                                                        defaultValue={
                                                            profile.notes
                                                        }
                                                        class="form-control"
                                                    />
                                                </div>
                                                <br />
                                            </div>
                                            <div class="modal-footer">
                                                <button
                                                    type="button"
                                                    class="btn btn-secondary"
                                                    data-dismiss="modal"
                                                >
                                                    Close
                                                </button>
                                                <input
                                                    type="submit"
                                                    value="Update Profile"
                                                    class="btn btn-primary btn-block"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <ul className="inf">
                                <li>
                                    {" "}
                                    <b> Name: </b> {user.fullName}{" "}
                                </li>
                                <br />
                                <li className="item">
                                    {" "}
                                    <b> Date of Birth: </b>{" "}
                                    {profile.dateOfBirth}{" "}
                                </li>
                                <br />
                                <li className="item">
                                    {" "}
                                    <b> Height: </b> {profile.heightFeet} Feet{" "}
                                    {profile.heightInches} Inches{" "}
                                </li>
                                <br />
                                <li className="item">
                                    {" "}
                                    <b> Weight: </b> {profile.weight} Pounds
                                </li>
                                <br />
                                <li className="item">
                                    {" "}
                                    <b> Notes: </b> {profile.notes}{" "}
                                </li>
                                <br />
                                <li className="item">
                                    {" "}
                                    <b> Joined: </b>{" "}
                                    {profile.createdAt.split("T").at(0)}{" "}
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

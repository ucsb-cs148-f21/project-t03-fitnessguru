import Container from "react-bootstrap/Container";
import React from "react";

export default function ModifyProfile() {

  return (
      <div>
        <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#modifyProfile" style={{width: "10%"}}>
            Modify Profile
        </button>

        <div class="modal fade" id="modifyProfile" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
               <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modify Profile</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <form action="" method="POST" class="mb-4">
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="DOB">Date Of Birth</label>
                                    <input type="text" name="name" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label for="Height">Height</label>
                                    <input type="text" name="name" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label for="Weight">Weight</label>
                                    <input type="text" name="name" class="form-control"/>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary btn-block">Modify</button>
                            </div>
                        </form>
                    
                </div>
            </div>
        </div>

      </div>
  );
}

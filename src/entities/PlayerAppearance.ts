import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Players } from "./Players";

@Entity("player_appearance", { schema: "beritra" })
export class PlayerAppearance {
  @Column("int", { primary: true, name: "player_id" })
  playerId: number;

  @Column("int", { name: "voice" })
  voice: number;

  @Column("int", { name: "skin_rgb" })
  skinRgb: number;

  @Column("int", { name: "hair_rgb" })
  hairRgb: number;

  @Column("int", { name: "eye_rgb" })
  eyeRgb: number;

  @Column("int", { name: "lip_rgb" })
  lipRgb: number;

  @Column("int", { name: "face" })
  face: number;

  @Column("int", { name: "hair" })
  hair: number;

  @Column("int", { name: "deco" })
  deco: number;

  @Column("int", { name: "tattoo" })
  tattoo: number;

  @Column("int", { name: "face_contour" })
  faceContour: number;

  @Column("int", { name: "expression" })
  expression: number;

  @Column("int", { name: "pupil_shape" })
  pupilShape: number;

  @Column("int", { name: "remove_mane" })
  removeMane: number;

  @Column("int", { name: "right_eye_rgb" })
  rightEyeRgb: number;

  @Column("int", { name: "eye_lash_shape" })
  eyeLashShape: number;

  @Column("int", { name: "jaw_line" })
  jawLine: number;

  @Column("int", { name: "forehead" })
  forehead: number;

  @Column("int", { name: "eye_height" })
  eyeHeight: number;

  @Column("int", { name: "eye_space" })
  eyeSpace: number;

  @Column("int", { name: "eye_width" })
  eyeWidth: number;

  @Column("int", { name: "eye_size" })
  eyeSize: number;

  @Column("int", { name: "eye_shape" })
  eyeShape: number;

  @Column("int", { name: "eye_angle" })
  eyeAngle: number;

  @Column("int", { name: "brow_height" })
  browHeight: number;

  @Column("int", { name: "brow_angle" })
  browAngle: number;

  @Column("int", { name: "brow_shape" })
  browShape: number;

  @Column("int", { name: "nose" })
  nose: number;

  @Column("int", { name: "nose_bridge" })
  noseBridge: number;

  @Column("int", { name: "nose_width" })
  noseWidth: number;

  @Column("int", { name: "nose_tip" })
  noseTip: number;

  @Column("int", { name: "cheek" })
  cheek: number;

  @Column("int", { name: "lip_height" })
  lipHeight: number;

  @Column("int", { name: "mouth_size" })
  mouthSize: number;

  @Column("int", { name: "lip_size" })
  lipSize: number;

  @Column("int", { name: "smile" })
  smile: number;

  @Column("int", { name: "lip_shape" })
  lipShape: number;

  @Column("int", { name: "jaw_height" })
  jawHeight: number;

  @Column("int", { name: "chin_jut" })
  chinJut: number;

  @Column("int", { name: "ear_shape" })
  earShape: number;

  @Column("int", { name: "head_size" })
  headSize: number;

  @Column("int", { name: "neck" })
  neck: number;

  @Column("int", { name: "neck_length" })
  neckLength: number;

  @Column("int", { name: "shoulder_size" })
  shoulderSize: number;

  @Column("int", { name: "torso" })
  torso: number;

  @Column("int", { name: "chest" })
  chest: number;

  @Column("int", { name: "waist" })
  waist: number;

  @Column("int", { name: "hips" })
  hips: number;

  @Column("int", { name: "arm_thickness" })
  armThickness: number;

  @Column("int", { name: "hand_size" })
  handSize: number;

  @Column("int", { name: "leg_thickness" })
  legThickness: number;

  @Column("int", { name: "facial_rate" })
  facialRate: number;

  @Column("int", { name: "foot_size" })
  footSize: number;

  @Column("int", { name: "arm_length" })
  armLength: number;

  @Column("int", { name: "leg_length" })
  legLength: number;

  @Column("int", { name: "shoulders" })
  shoulders: number;

  @Column("int", { name: "face_shape" })
  faceShape: number;

  @Column("int", { name: "pupil_size" })
  pupilSize: number;

  @Column("int", { name: "upper_torso" })
  upperTorso: number;

  @Column("int", { name: "fore_arm_thickness" })
  foreArmThickness: number;

  @Column("int", { name: "hand_span" })
  handSpan: number;

  @Column("int", { name: "calf_thickness" })
  calfThickness: number;

  @Column("float", { name: "height", precision: 12 })
  height: number;

  @OneToOne(() => Players, (players) => players.playerAppearance, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "player_id", referencedColumnName: "id" }])
  player: Players;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerAppearance = void 0;
const typeorm_1 = require("typeorm");
const Players_1 = require("./Players");
let PlayerAppearance = class PlayerAppearance {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "player_id" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "voice" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "voice", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "skin_rgb" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "skinRgb", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "hair_rgb" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "hairRgb", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "eye_rgb" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "eyeRgb", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "lip_rgb" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "lipRgb", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "face" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "face", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "hair" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "hair", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "deco" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "deco", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "tattoo" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "tattoo", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "face_contour" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "faceContour", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "expression" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "expression", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "pupil_shape" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "pupilShape", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "remove_mane" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "removeMane", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "right_eye_rgb" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "rightEyeRgb", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "eye_lash_shape" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "eyeLashShape", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "jaw_line" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "jawLine", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "forehead" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "forehead", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "eye_height" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "eyeHeight", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "eye_space" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "eyeSpace", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "eye_width" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "eyeWidth", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "eye_size" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "eyeSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "eye_shape" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "eyeShape", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "eye_angle" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "eyeAngle", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "brow_height" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "browHeight", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "brow_angle" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "browAngle", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "brow_shape" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "browShape", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "nose" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "nose", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "nose_bridge" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "noseBridge", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "nose_width" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "noseWidth", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "nose_tip" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "noseTip", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "cheek" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "cheek", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "lip_height" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "lipHeight", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "mouth_size" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "mouthSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "lip_size" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "lipSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "smile" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "smile", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "lip_shape" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "lipShape", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "jaw_height" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "jawHeight", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "chin_jut" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "chinJut", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "ear_shape" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "earShape", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "head_size" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "headSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "neck" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "neck", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "neck_length" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "neckLength", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "shoulder_size" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "shoulderSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "torso" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "torso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "chest" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "chest", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "waist" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "waist", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "hips" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "hips", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "arm_thickness" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "armThickness", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "hand_size" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "handSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "leg_thickness" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "legThickness", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "facial_rate" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "facialRate", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "foot_size" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "footSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "arm_length" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "armLength", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "leg_length" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "legLength", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "shoulders" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "shoulders", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "face_shape" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "faceShape", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "pupil_size" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "pupilSize", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "upper_torso" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "upperTorso", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "fore_arm_thickness" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "foreArmThickness", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "hand_span" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "handSpan", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "calf_thickness" }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "calfThickness", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "height", precision: 12 }),
    __metadata("design:type", Number)
], PlayerAppearance.prototype, "height", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Players_1.Players, (players) => players.playerAppearance, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "player_id", referencedColumnName: "id" }]),
    __metadata("design:type", Players_1.Players)
], PlayerAppearance.prototype, "player", void 0);
PlayerAppearance = __decorate([
    (0, typeorm_1.Entity)("player_appearance", { schema: "beritra" })
], PlayerAppearance);
exports.PlayerAppearance = PlayerAppearance;
//# sourceMappingURL=PlayerAppearance.js.map
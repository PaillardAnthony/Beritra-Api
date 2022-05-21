"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const accounts_module_1 = require("./resources/accounts/accounts.module");
const authentication_middleware_1 = require("./middleware/authentication.middleware");
const players_module_1 = require("./resources/player/players/players.module");
const player_motions_module_1 = require("./resources/player/player-motions/player-motions.module");
const friends_module_1 = require("./resources/friends/friends.module");
const player_effects_module_1 = require("./resources/player/player-effects/player-effects.module");
const player_quests_module_1 = require("./resources/player/player-quests/player-quests.module");
const event_items_module_1 = require("./resources/event-items/event-items.module");
const player_life_stats_module_1 = require("./resources/player/player-life-stats/player-life-stats.module");
const player_titles_module_1 = require("./resources/player/player-titles/player-titles.module");
const player_wardrobes_module_1 = require("./resources/player/player-wardrobes/player-wardrobes.module");
const old_names_module_1 = require("./resources/old-names/old-names.module");
const player_appearance_module_1 = require("./resources/player/player-appearance/player-appearance.module");
const mail_module_1 = require("./resources/mail/mail.module");
const player_pets_module_1 = require("./resources/player/player-pets/player-pets.module");
const player_npc_factions_module_1 = require("./resources/player/player-npc-factions/player-npc-factions.module");
const craft_cooldowns_module_1 = require("./resources/craft-cooldowns/craft-cooldowns.module");
const guides_module_1 = require("./resources/guides/guides.module");
const player_macrosses_module_1 = require("./resources/player/player-macrosses/player-macrosses.module");
const player_skills_module_1 = require("./resources/player/player-skills/player-skills.module");
const surveys_module_1 = require("./resources/surveys/surveys.module");
const player_emotions_module_1 = require("./resources/player/player-emotions/player-emotions.module");
const player_bind_point_module_1 = require("./resources/player/player-bind-point/player-bind-point.module");
const brokers_module_1 = require("./resources/brokers/brokers.module");
const player_game_stats_module_1 = require("./resources/player/player-game-stats/player-game-stats.module");
const legion_members_module_1 = require("./resources/legion-members/legion-members.module");
const legions_module_1 = require("./resources/legions/legions.module");
const legion_emblems_module_1 = require("./resources/legion-emblems/legion-emblems.module");
const legion_histories_module_1 = require("./resources/legion-histories/legion-histories.module");
const legion_announcement_lists_module_1 = require("./resources/legion-announcement-lists/legion-announcement-lists.module");
const player_vars_module_1 = require("./resources/player/player-vars/player-vars.module");
const player_registered_items_module_1 = require("./resources/player/player-registered-items/player-registered-items.module");
const player_atreian_bestiaries_module_1 = require("./resources/player/player-atreian-bestiaries/player-atreian-bestiaries.module");
const player_settings_module_1 = require("./resources/player/player-settings/player-settings.module");
const player_cooldowns_module_1 = require("./resources/player/player-cooldowns/player-cooldowns.module");
const portal_cooldowns_module_1 = require("./resources/portal-cooldowns/portal-cooldowns.module");
const player_punishements_module_1 = require("./resources/player/player-punishements/player-punishements.module");
const item_cooldowns_module_1 = require("./resources/item-cooldowns/item-cooldowns.module");
const player_cps_module_1 = require("./resources/player/player-cps/player-cps.module");
const abyss_ranks_module_1 = require("./resources/abyss-ranks/abyss-ranks.module");
const blocks_module_1 = require("./resources/blocks/blocks.module");
const player_stigmas_equippeds_module_1 = require("./resources/player/player-stigmas-equippeds/player-stigmas-equippeds.module");
const web_rewards_module_1 = require("./resources/web-rewards/web-rewards.module");
const player_recipes_module_1 = require("./resources/player/player-recipes/player-recipes.module");
const banned_ip_module_1 = require("./resources/bans/banned-ip/banned-ip.module");
const banned_mac_module_1 = require("./resources/bans/banned-mac/banned-mac.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(authentication_middleware_1.AuthenticationMiddleware)
            .exclude({ path: 'accounts/login', method: common_1.RequestMethod.POST }, { path: 'players', method: common_1.RequestMethod.GET }, { path: 'abyssRanks', method: common_1.RequestMethod.GET })
            .forRoutes({ path: 'accounts', method: common_1.RequestMethod.ALL }, { path: 'players', method: common_1.RequestMethod.ALL }, { path: 'abyssRank', method: common_1.RequestMethod.ALL });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => Object.assign(await (0, typeorm_2.getConnectionOptions)(), {
                    autoLoadEntities: true,
                }),
            }),
            accounts_module_1.AccountsModule,
            players_module_1.PlayersModule,
            player_motions_module_1.PlayerMotionsModule,
            friends_module_1.FriendsModule,
            player_effects_module_1.PlayerEffectsModule,
            player_quests_module_1.PlayerQuestsModule,
            event_items_module_1.EventItemsModule,
            player_life_stats_module_1.PlayerLifeStatsModule,
            player_titles_module_1.PlayerTitlesModule,
            player_wardrobes_module_1.PlayerWardrobesModule,
            old_names_module_1.OldNamesModule,
            player_appearance_module_1.PlayerAppearanceModule,
            mail_module_1.MailModule,
            player_pets_module_1.PlayerPetsModule,
            player_npc_factions_module_1.PlayerNpcFactionsModule,
            craft_cooldowns_module_1.CraftCooldownsModule,
            guides_module_1.GuidesModule,
            player_macrosses_module_1.PlayerMacrossesModule,
            player_skills_module_1.PlayerSkillsModule,
            surveys_module_1.SurveysModule,
            player_emotions_module_1.PlayerEmotionsModule,
            player_bind_point_module_1.PlayerBindPointModule,
            brokers_module_1.BrokersModule,
            player_game_stats_module_1.PlayerGameStatsModule,
            legion_members_module_1.LegionMembersModule,
            legions_module_1.LegionsModule,
            legion_emblems_module_1.LegionEmblemsModule,
            legion_histories_module_1.LegionHistoriesModule,
            legion_announcement_lists_module_1.LegionAnnouncementListsModule,
            player_vars_module_1.PlayerVarsModule,
            player_registered_items_module_1.PlayerRegisteredItemsModule,
            player_atreian_bestiaries_module_1.PlayerAtreianBestiariesModule,
            player_settings_module_1.PlayerSettingsModule,
            player_cooldowns_module_1.PlayerCooldownsModule,
            portal_cooldowns_module_1.PortalCooldownsModule,
            player_punishements_module_1.PlayerPunishementsModule,
            item_cooldowns_module_1.ItemCooldownsModule,
            player_cps_module_1.PlayerCpsModule,
            abyss_ranks_module_1.AbyssRanksModule,
            blocks_module_1.BlocksModule,
            player_stigmas_equippeds_module_1.PlayerStigmasEquippedsModule,
            web_rewards_module_1.WebRewardsModule,
            player_recipes_module_1.PlayerRecipesModule,
            banned_ip_module_1.BannedIpModule,
            banned_mac_module_1.BannedMacModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map